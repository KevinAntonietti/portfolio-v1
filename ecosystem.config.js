module.exports = {
    apps : [{
      script: 'sass source/styles/index.scss public/css/styles.css & node ./bin/www',
      watch: '.'
    }, ],
  
    deploy : {
      production : {
        user : 'ubuntu',
        host : '51.77.221.46',
        ref  : 'main',
        repo : 'git@github.com:KevinAntonietti/portfolio-v1.git',
        path : '/home/ubuntu/portfolio-v1',
        'pre-deploy-local': '',
        'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
        'pre-setup': ''
      }
    }
  };