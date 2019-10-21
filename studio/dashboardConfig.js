export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dae27a7f468c1018e82fb0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vwnfyei8',
                  apiId: '5cb12bc2-57ad-46fd-ae28-71293033971a'
                },
                {
                  buildHookId: '5dae27a7ac32ac0180c4a265',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gdp9ypsa',
                  apiId: '3aec12b9-fea9-4936-a97d-a531ada12366'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jpanuncialman/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gdp9ypsa.netlify.com', category: 'apps'}
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
