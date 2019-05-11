export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5cd643b1346fb2c32a6b1f2e',
                  title: 'Sanity Studio',
                  name: 'omars-sanity-gatsby-portfolio-studio',
                  apiId: '103faaa8-1831-4ae4-8a29-305bd7f139e8'
                },
                {
                  buildHookId: '5cd643b159c4a7c8d25ca85c',
                  title: 'Portfolio Website',
                  name: 'omars-sanity-gatsby-portfolio',
                  apiId: '578d2d75-99e0-4c81-bd9d-cf071e682f40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/omarmosid/omars-sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://omars-sanity-gatsby-portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
