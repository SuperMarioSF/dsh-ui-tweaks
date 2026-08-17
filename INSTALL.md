# dsh-ui-tweaks 安装指南

这是一个 DSH Web 的自定义 UI 插件，提供：

- Thinking 自动展开/滚动/收起
- Tool call 默认展开
- 紧凑顶栏 / 更宽聊天区
- 侧栏自动收起策略
- 轨迹追踪
- 余额按钮 + 分模型/峰谷用量费用浮窗
- 多价格策略历史计价
- 请求明细分页与实时差分更新

## 安装步骤

### 1. 获取插件源码

从 GitHub 克隆：

```bash
git clone https://github.com/SuperMarioSF/dsh-ui-tweaks.git ~/dsh-ui-tweaks
```

如果你已经有 `dsh-ui-tweaks.tgz`，也可以直接使用该包。

### 2. 安装到 DSH Web profile

在目标机器上执行：

```bash
dsh plugin --profile web add ~/dsh-ui-tweaks
```

如果 `dsh plugin add` 不接受本地路径，也可以手动安装：

```bash
cd ~/.dsh/profiles/web
pnpm add ~/dsh-ui-tweaks
```

### 3. 注册插件行

编辑 `~/.dsh/profiles/web/cordis.patch.yml`，在文件末尾追加：

```yaml
- insert:
    - id: dsh-ui-tweaks
      name: dsh-ui-tweaks
```

如果该文件已经有 `- insert:` 块，请把：

```yaml
    - id: dsh-ui-tweaks
      name: dsh-ui-tweaks
```

合并进已有的 insert 列表里，不要重复创建多个 `- insert:` 顶层块。

### 4. 重启 / 刷新

- 重启 DSH Web：`dsh --profile web`
- 或在已运行的页面里硬刷新：`Ctrl/Cmd + Shift + R`

## 验证是否安装成功

打开任意已有对话页面，观察：

1. 顶栏右侧出现余额按钮；
2. 点击余额按钮出现用量/费用浮窗；
3. 新会话页面不会自动收起侧栏，进入已有对话页会自动收起。

## 卸载

```bash
dsh plugin --profile web remove dsh-ui-tweaks
```

并删除 `~/.dsh/profiles/web/cordis.patch.yml` 中对应的插件行。

## 注意事项

- 该插件使用 DeepSeek 官方计价规则，价格策略在 `lib/client.js` 的 `PRICING_SCHEDULES` 中维护；
- 余额读取依赖已配置的 `DEEPSEEK_API_KEY`；
- 如果对方环境里 `dsh plugin` 的 pnpm store 是只读的，可能需要先用可写环境安装，或直接手动放置 `node_modules`。
