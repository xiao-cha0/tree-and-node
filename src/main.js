const createdList = (value)=>{//创建一个节点
  return createdNode(value);
};
const appendList = (list,value) =>{//在list的基础上增加一个节点
  const node = createdNode(value);
  let x = list;
  while(x.next){
    x= x.next;
  }
  x.next = node;//让List的下一个节点 = 新增加的节点
  return node;
};
const removeFromList = (list,node) =>{
  if(list === node){//如果删除的节点 = list
    list = node.text;//list等于node的下一个节点
  }else{
    if(list.next === node){//如果删除的是第二个节点
      list.next = node.next;//让第二个节点 = node的下一个节点
    }else{
      if(list.next.next === node){
        list.next.next = node.next;
      }else{
        if(list.next.next.next === node){
          list.next.next.next = node.next;
        }
      }
    }
  }
};
const createdNode = (value)=>{
  return {
    data: value,
    next: null,
  };
};
const list = createdList(10);
const node2 = appendList(list,20);
const node3 = appendList(list,30);
console.log(list);