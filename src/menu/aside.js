// 左侧菜单栏
export default [
    { path: '/index', title: '首页', icon: 'home' },
    {
        title: '系统管理',icon: 'folder-o',
        children: [
            { path: '/page1', title: '用户管理 1' },
            { path: '/page2', title: '角色管理 2' },
            { path: '/page3', title: '菜单管理 3' },
            { path: '/page4', title: '字典管理 4' }
        ]
    },
    {
        title: '学生管理',icon: 'folder-o',
        children: [
            { path: '/page11', title: '用户管理 1' },
            { path: '/page22', title: '角色管理 2' },
            { path: '/page33', title: '菜单管理 3' },
            { path: '/page44', title: '字典管理 4' }
        ]
    }
]
