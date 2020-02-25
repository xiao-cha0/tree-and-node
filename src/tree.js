let createTree = (value)=>{
  return {
    data:value,
    children: null,
    parent: null,
  }
};
let appendChild = (node,value) =>{
  const newNode = {
    data: value,
    children: null,
    parent: node,
  };
  //node就表示tree这个节点
  node.children = node.children || [];//假如tree有自己的孩子，就让tree.next(也就是tree.children)=tree.children;如果没有孩子，那就用"[]"表示
  node.children.push(newNode);//将自己的孩子添加到存放孩子的数组中
  return newNode;
};
const travel = (tree,fn)=>{
  fn(tree);//调用tarvel这个函数
  if(!tree.children){return}//如果没有孩子就直接退出
  for(let i=0;i<tree.children.length;i++){//遍历tree.children这个数组
    travel(tree.children[i],fn);//通过遍历，拿到每一个children并传给你fn,
  }
};
//从tree中删除一个节点
const removeChildren = (tree,node)=>{
  const siblings = node.parent.children;//找到他的兄弟姐妹
  //寻找需要删除的node的下标
  let index = 0;//表示肯定存在这个下标
  for(let i = 1;i<siblings.length;i++){//遍历兄弟姐妹们
    if(siblings[i] === node){//如果其中有一个等于这个节点
      i = index;//让找到的这个node的下标等于刚刚初始化的下标
    }
  }
  siblings.splice(index,1);//从兄弟姐妹中删除它
};
//定义find方法
const find = (tree,node) =>{//在tree中找node这个节点
  if(tree === node){
    return tree;
    //如果在tree中没有找到节点node,就继续到它的儿子中找
  }else if(tree.children){
    for(let i=0;i<tree.children.length;i++){//遍历所有儿子
     const result =  find(tree.children[i],node);//如果第i个儿子 = node,就记为result
     if(result){return result;}//如果result存在，就返回result
    }
    return undefined;//如果儿子中也没有找到，就返回undefined
  }else{
    return undefined;//所有节点中都找不到这一个就返回undefined
  }
};
const tree = createTree(10);
const node2 =appendChild(tree,20);
const node3 =appendChild(tree,30);
appendChild(tree,40);
appendChild(tree,50);
const node4 = appendChild(node2,201);
appendChild(node2,202);
appendChild(node2,203);
appendChild(node2,204);
//travel(tree,(node)=>{console.log(node.data)});
//console.log(find(tree, node3));
console.log(removeChildren(tree, node4));
console.log(tree);