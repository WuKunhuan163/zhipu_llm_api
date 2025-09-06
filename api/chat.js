/**
 * Zhipu AI Chat API Endpoint
 * Vercel Serverless Function for Zhipu GLM API
 */

export default async function handler(req, res) {
    // 设置CORS头部
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 只允许POST请求
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { apiKey, messages, model = 'glm-4-plus', stream = false } = req.body;

        console.log('🤖 智谱API请求:', {
            model,
            messagesCount: messages?.length,
            stream,
            apiKeyPrefix: apiKey?.substring(0, 8) + '...'
        });

        // 验证必需参数
        if (!apiKey) {
            return res.status(400).json({ 
                success: false, 
                error: 'API Key is required' 
            });
        }

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ 
                success: false, 
                error: 'Messages array is required and cannot be empty' 
            });
        }

        // 构建请求体
        const requestBody = {
            model,
            messages,
            stream,
            max_tokens: 4000,
            temperature: 0.7,
            top_p: 0.9
        };

        // 调用智谱AI API
        const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        console.log('📥 智谱API响应状态:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ 智谱API错误:', response.status, errorText);
            
            return res.status(response.status).json({
                success: false,
                error: `Zhipu API error: ${response.status} ${response.statusText}`,
                details: errorText
            });
        }

        const result = await response.json();
        console.log('✅ 智谱API调用成功');

        return res.status(200).json({
            success: true,
            data: result,
            model: model,
            usage: result.usage
        });

    } catch (error) {
        console.error('❌ 智谱API端点错误:', error);
        
        return res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: error.message
        });
    }
}
