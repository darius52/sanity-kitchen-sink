export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '611371c758f3808edb2c7960',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rpzozqbs',
                  apiId: 'b74c8ff6-856e-4974-8457-9cf91552fb29'
                },
                {
                  buildHookId: '611371c7b016ea781d52116b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z9rnnmc7',
                  apiId: '583746dc-d464-417e-bfca-36688f87d2aa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darius52/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z9rnnmc7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
