# 🤖 智谱AI聊天 @Vercel

基于智谱GLM大模型的智能对话助手，部署在Vercel平台上的Serverless应用。

## ✨ 功能特性

- 🤖 **智谱GLM模型**: 支持多种GLM模型（GLM-4-Plus、GLM-4、GLM-4-Flash等）
- 💬 **实时对话**: 流畅的聊天界面，支持连续对话
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🔐 **安全可靠**: API Key本地存储，不会上传到服务器
- 📥 **导出功能**: 支持下载聊天记录为HTML文件
- ⚡ **Serverless**: 基于Vercel Functions的无服务器架构

## 🚀 在线使用

访问: [https://zhipu-llm-api.vercel.app](https://zhipu-llm-api.vercel.app)

## 📋 使用步骤

1. **获取API Key**
   - 前往 [智谱AI开放平台](https://bigmodel.cn/usercenter/proj-mgmt/apikeys)
   - 注册账号并创建API Key
   
2. **配置应用**
   - 输入您的智谱AI API Key
   - 选择要使用的模型
   - 点击"验证API Key"

3. **开始对话**
   - 在聊天框中输入消息
   - 支持回车发送或点击发送按钮
   - 享受智能对话体验

## 🛠️ 本地开发

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 本地运行

```bash
npm run dev
```

访问 http://localhost:3000

### 部署到Vercel

```bash
npm run deploy
```

## 📁 项目结构

```
zhipu-llm-api/
├── api/
│   └── chat.js          # 智谱AI API端点
├── assets/
│   ├── scripts/
│   └── stylesheets/
├── index.html           # 主页面
├── package.json
├── vercel.json          # Vercel配置
└── README.md
```

## 🔧 API端点

### POST /api/chat

智谱AI对话接口

**请求参数:**
```json
{
  "apiKey": "your-zhipu-api-key",
  "model": "glm-4-plus",
  "messages": [
    {
      "role": "user",
      "content": "你好"
    }
  ]
}
```

**响应格式:**
```json
{
  "success": true,
  "data": {
    "choices": [
      {
        "message": {
          "role": "assistant",
          "content": "你好！有什么可以帮助您的吗？"
        }
      }
    ],
    "usage": {
      "prompt_tokens": 2,
      "completion_tokens": 10,
      "total_tokens": 12
    }
  },
  "model": "glm-4-plus"
}
```

## 🎯 支持的模型

- **GLM-4-Plus**: 最新最强大的模型
- **GLM-4-0520**: 稳定版本
- **GLM-4**: 标准版本
- **GLM-4-Air**: 轻量级版本
- **GLM-4-AirX**: 增强轻量版
- **GLM-4-Flash**: 快速响应版本

## 🔒 隐私安全

- API Key仅在客户端使用，不会存储在服务器
- 聊天记录仅保存在本地浏览器
- 支持一键清除聊天历史
- 所有通信采用HTTPS加密

## 📄 许可证

MIT License

## 🔗 相关链接

- [智谱AI开放平台](https://bigmodel.cn/)
- [Vercel部署文档](https://vercel.com/docs)
- [智谱AI API文档](https://bigmodel.cn/dev/api)

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📞 支持

如有问题，请通过以下方式联系：

- 提交GitHub Issue
- 发送邮件至开发者

---

**享受与智谱AI的智能对话体验！** 🚀
