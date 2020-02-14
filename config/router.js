export default [
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            name: 'welcome',
            icon: 'smile',
            component: './Welcome',
            routes: [
                {
                    path: '/dashboard/analysis',
                    name: 'welcome',
                    component: './Welcome',
                },
            ]
          },
          {
            component: './404',
          },
        ],
    },
    {
    component: './404',
    },   
]
