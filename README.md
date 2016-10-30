# Gimme Reason

## Just Give Me A [Reason](http://facebook.github.io/reason) Application

[![Build Status](https://travis-ci.org/Pitzcarraldo/gimme-reason.svg?branch=master)](https://travis-ci.org/Pitzcarraldo/gimme-reason)

> *Gimme a Reason - Raven*

[![Gimme A Reason](https://img.youtube.com/vi/T8Lq7lOm4OY/0.jpg)](https://www.youtube.com/watch?v=T8Lq7lOm4OY)


### Need Any Reason?

[Reason](http://facebook.github.io/reason) is a cool interface to build fast and concise functional application. And there are [several ways](https://github.com/facebook/reason/blob/master/README.md#install-stable) to use it.  
[ExampleProject](https://github.com/reasonml/ExampleProject) is a nice project to start Reason with Node.js. So I wrapped it with CLI to build new Reason Applications.  
Do you need a new Reason Application? Just say it. `gimme-reason`

### USAGE

```bash
$ npm install -g gimme-reason
$ gimme-reason
? Project Name New Reason App
? Project Description New Application using Reason
? Version 0.0.1
? Author Reason User
? Github Username reason-user

This will walk you through creating a new Reason project in /path/of/new-reason-app
create .gitignore
create .merlin
create .travis.yml
create LICENSE
create README-Yarn.md
create README.md
create package.json
create src/App.re
create tags

To run your Reason App:
    cd /path/of/new-reason-app
    npm install
    npm start
If you want to use Reason with yarn, please read README-Yarn.md
```

### License

This software is free to use under the Minkyu Cho. MIT license.
See the [LICENSE file][] for license text and copyright information.

[LICENSE file]: https://github.com/Pitzcarraldo/gimme-reason/blob/master/LICENSE

### Contributing

**Please don't hesitate to send a small pull-request or just leave anything you want as an issue.**

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request :D