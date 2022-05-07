## 单元测试

> 集成测试

## 模块测试

> 多模块测试

### jest 配置

#### jest.config.js 配置

```npx jest --init```

#### 测试覆盖率报告

```npx jest --coverage```

#### babel

```babel
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
```

#### babelrc

> 将 es module 模块导入方式通过 babel 转为 node 环境的 common.js 导入

```babel
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
}
```
