(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{3063:function(t,e){t.exports={content:["section",["p","\u591A\u5C42\u6B21\u7684\u7ED3\u6784\u5217\u8868\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["p","\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528 ",["code","\u6811\u63A7\u4EF6"]," \u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002"]],meta:{category:"Components",type:"\u6570\u636E\u5C55\u793A",title:"Tree",subtitle:"\u6811\u5F62\u63A7\u4EF6",cover:"https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg",filename:"components/tree/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6CE8\u610F",title:"\u6CE8\u610F"},"\u6CE8\u610F"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","allowDrop"],["td","\u662F\u5426\u5141\u8BB8\u62D6\u62FD\u65F6\u653E\u7F6E\u5728\u8BE5\u8282\u70B9"],["td","({ dropNode, dropPosition }) => boolean"],["td","-"],["td"]],["tr",["td","autoExpandParent"],["td","\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u7236\u8282\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","blockNode"],["td","\u662F\u5426\u8282\u70B9\u5360\u636E\u4E00\u884C"],["td","boolean"],["td","false"],["td"]],["tr",["td","checkable"],["td","\u8282\u70B9\u524D\u6DFB\u52A0 Checkbox \u590D\u9009\u6846"],["td","boolean"],["td","false"],["td"]],["tr",["td","checkedKeys"],["td","\uFF08\u53D7\u63A7\uFF09\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9\uFF08\u6CE8\u610F\uFF1A\u7236\u5B50\u8282\u70B9\u6709\u5173\u8054\uFF0C\u5982\u679C\u4F20\u5165\u7236\u8282\u70B9 key\uFF0C\u5219\u5B50\u8282\u70B9\u81EA\u52A8\u9009\u4E2D\uFF1B\u76F8\u5E94\u5F53\u5B50\u8282\u70B9 key \u90FD\u4F20\u5165\uFF0C\u7236\u8282\u70B9\u4E5F\u81EA\u52A8\u9009\u4E2D\u3002\u5F53\u8BBE\u7F6E ",["code","checkable"]," \u548C ",["code","checkStrictly"],"\uFF0C\u5B83\u662F\u4E00\u4E2A\u6709",["code","checked"],"\u548C",["code","halfChecked"],"\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E14\u7236\u5B50\u8282\u70B9\u7684\u9009\u4E2D\u4E0E\u5426\u4E0D\u518D\u5173\u8054"],["td","string","[","] ","|"," {checked: string","[","], halfChecked: string","[","]}"],["td","[","]"],["td"]],["tr",["td","checkStrictly"],["td","checkable \u72B6\u6001\u4E0B\u8282\u70B9\u9009\u62E9\u5B8C\u5168\u53D7\u63A7\uFF08\u7236\u5B50\u8282\u70B9\u9009\u4E2D\u72B6\u6001\u4E0D\u518D\u5173\u8054\uFF09"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultCheckedKeys"],["td","\u9ED8\u8BA4\u9009\u4E2D\u590D\u9009\u6846\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","defaultExpandAll"],["td","\u9ED8\u8BA4\u5C55\u5F00\u6240\u6709\u6811\u8282\u70B9"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultExpandedKeys"],["td","\u9ED8\u8BA4\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","defaultExpandParent"],["td","\u9ED8\u8BA4\u5C55\u5F00\u7236\u8282\u70B9"],["td","boolean"],["td","true"],["td"]],["tr",["td","defaultSelectedKeys"],["td","\u9ED8\u8BA4\u9009\u4E2D\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","disabled"],["td","\u5C06\u6811\u7981\u7528"],["td","boolean"],["td","false"],["td"]],["tr",["td","draggable"],["td","\u8BBE\u7F6E\u8282\u70B9\u53EF\u62D6\u62FD\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",["code","icon: false"]," \u5173\u95ED\u62D6\u62FD\u63D0\u793A\u56FE\u6807"],["td","boolean ","|"," ((node: DataNode) => boolean) ","|"," { icon?: React.ReactNode ","|"," false, nodeDraggable?: (node: DataNode) => boolean }"],["td","false"],["td",["code","config"],": 4.17.0"]],["tr",["td","expandedKeys"],["td","\uFF08\u53D7\u63A7\uFF09\u5C55\u5F00\u6307\u5B9A\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","fieldNames"],["td","\u81EA\u5B9A\u4E49\u8282\u70B9 title\u3001key\u3001children \u7684\u5B57\u6BB5"],["td","object"],["td","{ title: ",["code","title"],", key: ",["code","key"],", children: ",["code","children"]," }"],["td","4.17.0"]],["tr",["td","filterTreeNode"],["td","\u6309\u9700\u7B5B\u9009\u6811\u8282\u70B9\uFF08\u9AD8\u4EAE\uFF09\uFF0C\u8FD4\u56DE true"],["td","function(node)"],["td","-"],["td"]],["tr",["td","height"],["td","\u8BBE\u7F6E\u865A\u62DF\u6EDA\u52A8\u5BB9\u5668\u9AD8\u5EA6\uFF0C\u8BBE\u7F6E\u540E\u5185\u90E8\u8282\u70B9\u4E0D\u518D\u652F\u6301\u6A2A\u5411\u6EDA\u52A8"],["td","number"],["td","-"],["td"]],["tr",["td","icon"],["td","\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u56FE\u6807\u3002"],["td","ReactNode ","|"," (props) => ReactNode"],["td","-"],["td"]],["tr",["td","loadData"],["td","\u5F02\u6B65\u52A0\u8F7D\u6570\u636E"],["td","function(node)"],["td","-"],["td"]],["tr",["td","loadedKeys"],["td","\uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 ",["code","loadData"]," \u4F7F\u7528"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","multiple"],["td","\u652F\u6301\u70B9\u9009\u591A\u4E2A\u8282\u70B9\uFF08\u8282\u70B9\u672C\u8EAB\uFF09"],["td","boolean"],["td","false"],["td"]],["tr",["td","selectable"],["td","\u662F\u5426\u53EF\u9009\u4E2D"],["td","boolean"],["td","true"],["td"]],["tr",["td","selectedKeys"],["td","\uFF08\u53D7\u63A7\uFF09\u8BBE\u7F6E\u9009\u4E2D\u7684\u6811\u8282\u70B9"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","showIcon"],["td","\u662F\u5426\u5C55\u793A TreeNode title \u524D\u7684\u56FE\u6807\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u5982\u8BBE\u7F6E\u4E3A true\uFF0C\u9700\u8981\u81EA\u884C\u5B9A\u4E49\u56FE\u6807\u76F8\u5173\u6837\u5F0F"],["td","boolean"],["td","false"],["td"]],["tr",["td","showLine"],["td","\u662F\u5426\u5C55\u793A\u8FDE\u63A5\u7EBF"],["td","boolean ","|"," {showLeafIcon: boolean}"],["td","false"],["td"]],["tr",["td","switcherIcon"],["td","\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u7684\u5C55\u5F00/\u6298\u53E0\u56FE\u6807"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","titleRender"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u8282\u70B9"],["td","(nodeData) => ReactNode"],["td","-"],["td","4.5.0"]],["tr",["td","treeData"],["td","treeNodes \u6570\u636E\uFF0C\u5982\u679C\u8BBE\u7F6E\u5219\u4E0D\u9700\u8981\u624B\u52A8\u6784\u9020 TreeNode \u8282\u70B9\uFF08key \u5728\u6574\u4E2A\u6811\u8303\u56F4\u5185\u552F\u4E00\uFF09"],["td","array","<","{key, title, children, ","[","disabled, selectable]}>"],["td","-"],["td"]],["tr",["td","treeLoadedKeys"],["td","\uFF08\u53D7\u63A7\uFF09\u5DF2\u7ECF\u52A0\u8F7D\u7684\u8282\u70B9\uFF0C\u9700\u8981\u914D\u5408 ",["code","loadData"]," \u4F7F\u7528"],["td","string[]"],["td","[]"],["td"]],["tr",["td","virtual"],["td","\u8BBE\u7F6E false \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8"],["td","boolean"],["td","true"],["td","4.1.0"]],["tr",["td","onCheck"],["td","\u70B9\u51FB\u590D\u9009\u6846\u89E6\u53D1"],["td","function(checkedKeys, e:{checked: bool, checkedNodes, node, event, halfCheckedKeys})"],["td","-"],["td"]],["tr",["td","onDragEnd"],["td","dragend \u89E6\u53D1\u65F6\u8C03\u7528"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDragEnter"],["td","dragenter \u89E6\u53D1\u65F6\u8C03\u7528"],["td","function({event, node, expandedKeys})"],["td","-"],["td"]],["tr",["td","onDragLeave"],["td","dragleave \u89E6\u53D1\u65F6\u8C03\u7528"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDragOver"],["td","dragover \u89E6\u53D1\u65F6\u8C03\u7528"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDragStart"],["td","\u5F00\u59CB\u62D6\u62FD\u65F6\u8C03\u7528"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onDrop"],["td","drop \u89E6\u53D1\u65F6\u8C03\u7528"],["td","function({event, node, dragNode, dragNodesKeys})"],["td","-"],["td"]],["tr",["td","onExpand"],["td","\u5C55\u5F00/\u6536\u8D77\u8282\u70B9\u65F6\u89E6\u53D1"],["td","function(expandedKeys, {expanded: bool, node})"],["td","-"],["td"]],["tr",["td","onLoad"],["td","\u8282\u70B9\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1"],["td","function(loadedKeys, {event, node})"],["td","-"],["td"]],["tr",["td","onRightClick"],["td","\u54CD\u5E94\u53F3\u952E\u70B9\u51FB"],["td","function({event, node})"],["td","-"],["td"]],["tr",["td","onSelect"],["td","\u70B9\u51FB\u6811\u8282\u70B9\u89E6\u53D1"],["td","function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"],["td","-"],["td"]]]],["h3","TreeNode props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th"]]],["tbody",["tr",["td","checkable"],["td","\u5F53\u6811\u4E3A checkable \u65F6\uFF0C\u8BBE\u7F6E\u72EC\u7ACB\u8282\u70B9\u662F\u5426\u5C55\u793A Checkbox"],["td","boolean"],["td","-"],["td"]],["tr",["td","disableCheckbox"],["td","\u7981\u6389 checkbox"],["td","boolean"],["td","false"],["td"]],["tr",["td","disabled"],["td","\u7981\u6389\u54CD\u5E94"],["td","boolean"],["td","false"],["td"]],["tr",["td","icon"],["td","\u81EA\u5B9A\u4E49\u56FE\u6807\u3002\u53EF\u63A5\u6536\u7EC4\u4EF6\uFF0Cprops \u4E3A\u5F53\u524D\u8282\u70B9 props"],["td","ReactNode ","|"," (props) => ReactNode"],["td","-"],["td"]],["tr",["td","isLeaf"],["td","\u8BBE\u7F6E\u4E3A\u53F6\u5B50\u8282\u70B9 (\u8BBE\u7F6E\u4E86 ",["code","loadData"]," \u65F6\u6709\u6548)\u3002\u4E3A ",["code","false"]," \u65F6\u4F1A\u5F3A\u5236\u5C06\u5176\u4F5C\u4E3A\u7236\u8282\u70B9"],["td","boolean"],["td","-"],["td"]],["tr",["td","key"],["td","\u88AB\u6811\u7684 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys \u5C5E\u6027\u6240\u7528\u3002\u6CE8\u610F\uFF1A\u6574\u4E2A\u6811\u8303\u56F4\u5185\u7684\u6240\u6709\u8282\u70B9\u7684 key \u503C\u4E0D\u80FD\u91CD\u590D\uFF01"],["td","string"],["td","(\u5185\u90E8\u8BA1\u7B97\u51FA\u7684\u8282\u70B9\u4F4D\u7F6E)"],["td"]],["tr",["td","selectable"],["td","\u8BBE\u7F6E\u8282\u70B9\u662F\u5426\u53EF\u88AB\u9009\u4E2D"],["td","boolean"],["td","true"],["td"]],["tr",["td","title"],["td","\u6807\u9898"],["td","ReactNode"],["td",["code","---"]],["td"]]]],["h3","DirectoryTree props"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"]]],["tbody",["tr",["td","expandAction"],["td","\u76EE\u5F55\u5C55\u5F00\u903B\u8F91\uFF0C\u53EF\u9009\uFF1Afalse ","|"," ",["code","click"]," ","|"," ",["code","doubleClick"]],["td","string ","|"," boolean"],["td",["code","click"]]]]],["h2","\u6CE8\u610F"],["p","\u5728 ",["code","3.4.0"]," \u4E4B\u524D\uFF1A\u6811\u8282\u70B9\u53EF\u4EE5\u6709\u5F88\u591A\uFF0C\u4F46\u5728\u8BBE\u7F6E ",["code","checkable"]," \u65F6\uFF0C\u5C06\u4F1A\u82B1\u8D39\u66F4\u591A\u7684\u8BA1\u7B97\u65F6\u95F4\uFF0C\u56E0\u6B64\u6211\u4EEC\u7F13\u5B58\u4E86\u4E00\u4E9B\u8BA1\u7B97\u7ED3\u679C\uFF08",["code","this.treeNodesStates"],"\uFF09\u6765\u590D\u7528\uFF0C\u907F\u514D\u591A\u6B21\u91CD\u590D\u8BA1\u7B97\uFF0C\u4EE5\u6B64\u63D0\u9AD8\u6027\u80FD\u3002\u4F46\u8FD9\u4E5F\u5E26\u6765\u4E86\u4E00\u4E9B\u9650\u5236\uFF0C\u5F53\u4F60\u5F02\u6B65\u52A0\u8F7D\u6811\u8282\u70B9\u65F6\uFF0C\u4F60\u9700\u8981\u8FD9\u6837\u6E32\u67D3\u6811\uFF1A"],["pre",{lang:"jsx",highlighted:`<span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>treeData<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span><span class="token punctuation">></span></span>
      <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>treeData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>data <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token punctuation">/></span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tree</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">'loading tree'</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`},["code",`{
  this.state.treeData.length ? (
    <Tree>
      {this.state.treeData.map(data => (
        <TreeNode />
      ))}
    </Tree>
  ) : (
    'loading tree'
  );
}`]],["h3","Tree \u65B9\u6CD5"],["table",["thead",["tr",["th","\u540D\u79F0"],["th","\u8BF4\u660E"]]],["tbody",["tr",["td","scrollTo({ key: string ","|"," number; align?: 'top' ","|"," 'bottom' ","|"," 'auto'; offset?: number })"],["td","\u865A\u62DF\u6EDA\u52A8\u4E0B\uFF0C\u6EDA\u52A8\u5230\u6307\u5B9A key \u6761\u76EE"]]]],["h2","FAQ"],["h3","\u5728 showLine \u65F6\uFF0C\u5982\u4F55\u9690\u85CF\u5B50\u8282\u70B9\u56FE\u6807\uFF1F"],["p","\u6587\u4EF6\u56FE\u6807\u901A\u8FC7 switcherIcon \u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u4F60\u53EF\u4EE5\u8986\u76D6\u5BF9\u5E94\u7684\u6837\u5F0F\uFF1A",["a",{title:null,href:"https://codesandbox.io/s/883vo47xp8"},"https://codesandbox.io/s/883vo47xp8"]],["h3","defaultExpandedAll \u5728\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u65F6\u4E3A\u4F55\u4E0D\u751F\u6548\uFF1F"],["p",["code","default"]," \u524D\u7F00\u5C5E\u6027\u53EA\u6709\u5728\u521D\u59CB\u5316\u65F6\u751F\u6548\uFF0C\u56E0\u800C\u5F02\u6B65\u52A0\u8F7D\u6570\u636E\u65F6 ",["code","defaultExpandedAll"]," \u5DF2\u7ECF\u6267\u884C\u5B8C\u6210\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u53D7\u63A7 ",["code","expandedKeys"]," \u6216\u8005\u5728\u6570\u636E\u52A0\u8F7D\u5B8C\u6210\u540E\u6E32\u67D3 Tree \u6765\u5B9E\u73B0\u5168\u90E8\u5C55\u5F00\u3002"],["h3","\u865A\u62DF\u6EDA\u52A8\u7684\u9650\u5236"],["p","\u865A\u62DF\u6EDA\u52A8\u901A\u8FC7\u5728\u4EC5\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u7684\u5143\u7D20\u6765\u63D0\u5347\u6E32\u67D3\u6027\u80FD\u3002\u4F46\u662F\u540C\u65F6\u7531\u4E8E\u4E0D\u4F1A\u6E32\u67D3\u6240\u6709\u8282\u70B9\uFF0C\u6240\u4EE5\u65E0\u6CD5\u81EA\u52A8\u62D3\u8F6C\u6A2A\u5411\u5BBD\u5EA6\uFF08\u6BD4\u5982\u8D85\u957F ",["code","title"]," \u7684\u6A2A\u5411\u6EDA\u52A8\u6761\uFF09\u3002"],["h3",["code","disabled"]," \u8282\u70B9\u5728\u6811\u4E2D\u7684\u5173\u7CFB\u662F\u4EC0\u4E48\uFF1F"],["p","Tree \u901A\u8FC7\u4F20\u5BFC\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u53D8\u66F4\u3002\u65E0\u8BBA\u662F\u5C55\u5F00\u8FD8\u662F\u52FE\u9009\uFF0C\u5B83\u90FD\u4F1A\u4ECE\u53D8\u66F4\u7684\u8282\u70B9\u5F00\u59CB\u5411\u4E0A\u3001\u5411\u4E0B\u4F20\u5BFC\u53D8\u5316\uFF0C\u76F4\u5230\u904D\u5386\u7684\u5F53\u524D\u8282\u70B9\u662F ",["code","disabled"]," \u65F6\u505C\u6B62\u3002\u56E0\u800C\u5982\u679C\u63A7\u5236\u7684\u8282\u70B9\u672C\u8EAB\u4E3A ",["code","disabled"]," \u65F6\uFF0C\u90A3\u4E48\u5B83\u53EA\u4F1A\u4FEE\u6539\u672C\u8EAB\u800C\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u8282\u70B9\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u4E00\u4E2A\u7236\u8282\u70B9\u5305\u542B 3 \u4E2A\u5B50\u8282\u70B9\uFF0C\u5176\u4E2D\u4E00\u4E2A\u4E3A ",["code","disabled"]," \u72B6\u6001\u3002\u90A3\u4E48\u52FE\u9009\u7236\u8282\u70B9\uFF0C\u53EA\u4F1A\u5F71\u54CD\u5176\u4F59\u4E24\u4E2A\u5B50\u8282\u70B9\u53D8\u6210\u52FE\u9009\u72B6\u6001\u3002\u52FE\u9009\u4E24\u4E2A\u5B50\u8282\u70B9\u540E\uFF0C\u65E0\u8BBA ",["code","disabled"]," \u8282\u70B9\u4EC0\u4E48\u72B6\u6001\uFF0C\u7236\u8282\u70B9\u90FD\u4F1A\u53D8\u6210\u52FE\u9009\u72B6\u6001\u3002"],["p","\u8FD9\u79CD\u4F20\u5BFC\u7EC8\u6B62\u7684\u65B9\u5F0F\u662F\u4E3A\u4E86\u9632\u6B62\u901A\u8FC7\u52FE\u9009\u5B50\u8282\u70B9\u4F7F\u5F97 ",["code","disabled"]," \u7236\u8282\u70B9\u53D8\u6210\u52FE\u9009\u72B6\u6001\uFF0C\u800C\u7528\u6237\u65E0\u6CD5\u76F4\u63A5\u52FE\u9009 ",["code","disabled"]," \u7236\u8282\u70B9\u66F4\u6539\u5176\u72B6\u6001\u5BFC\u81F4\u7684\u4EA4\u4E92\u77DB\u76FE\u3002\u5982\u679C\u4F60\u6709\u7740\u81EA\u5DF1\u7684\u4F20\u5BFC\u9700\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",["code","checkStrictly"]," \u81EA\u5B9A\u4E49\u52FE\u9009\u903B\u8F91\u3002"]]}}}]);