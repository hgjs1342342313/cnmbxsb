# 应届生职业角色测试

一个部署在 GitHub Pages 上的轻量职业测试网站。

它面向应届大学生、实习生和校招生，用“角色测试”的方式帮助用户判断自己更适合哪类职业方向，例如产品、运营、开发、设计、销售、数据分析等。

## 技术栈

- React 19
- Vite
- TypeScript
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## 本地启动

```bash
npm install
npm run dev
```

默认开发地址通常为：

`http://localhost:5173`

## 构建

```bash
npm run build
```

构建产物会输出到 `dist/`。

## 部署

项目已包含 GitHub Pages 的工作流配置：

- 工作流文件：`.github/workflows/deploy.yml`
- 默认在 `main` 分支有新提交时自动构建并部署

你需要在 GitHub 仓库设置中确认：

- `Settings`
- `Pages`
- `Build and deployment`
- `Source` 选择 `GitHub Actions`

## 当前页面结构

- 首页：介绍测试定位与氛围
- 测试页：8 道场景题
- 结果页：输出职业角色、适合方向和下一步建议

## 后续可继续迭代

- 增加更多题目和角色
- 提高结果页可分享性
- 增加专业或行业定制题库
- 做更完整的结果解释和行动建议

## 协作说明

项目协作规范见 [AGENT.md](./AGENT.md)。
