const INITIAL_STATE = {
    sections:  [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1549040634-41fbcd2eb623?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1551726195-0c4e3e49f2a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60' ,
          id: 3,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1610582144787-eda2e6f293b4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aG9vZGllJTIwd29tZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1593757147298-e064ed1419e5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
          size: 'large',
          id: 5,
          linkUrl: ''
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;