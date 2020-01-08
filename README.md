# What is Meteor.js?

full stack을 지향하는 웹 프레임워크

Realtime을 근간으로 Collaboration과 Share를 위해 잘 갖추어진 Modern Application Platform이다.

Reactive 영역을 프론트엔드에서 백엔드로 확장해 기술셋을 잘 구비해 놓았다.

Front end 

* Blaze, AngularJs, ReactJs

Middle - Latency Compensation

* DDP (Distributed Data Protocol)
* Client Data Cache (mini mongo)

Back end - Data Bus

* Live query

***

### 구조

> **client**
>
> > **main.css**
> >
> > **main.html** - HTML file that defines view templates
> >
> > **main.js** - JavaScript entry point loaded on the client
>
> **imports**
>
> > **ui**
> >
> > > **body.html**
> > >
> > > **body.js**
> >
> > **api** - this is a sensible place to store API-related files for the application (`collection`, `publications`)
> >
> > > **task.js**
>
> **node_modules library root** - packages installed by npm
>
> > **@babel**
> >
> > **jquery**
> >
> > **meteor-node-stubs**
> >
> > **regenerator-runtime**
>
> **server**
>
> > **main.js** - JavaScript entry point loaded on the server
>
> **package.json** - control file for installing npm packages
>
> **package-lock.json** - decribes the npm dependency tree
>
> **.meteor** - internal Meteor files

***

### Application Structure

* **Universal Javascript**

  * Meteor는 자바스크립트 어플리케이션 개발을 위한 풀스택 프레임워크이다.
  * 클라이언트에서 실행되는 코드, 서버(Node.js 등)에서 실행되는 코드를 모두 포함한다.

* **eS2015 modules (ES6)**

  * `export` : 파일 밖에서 변수를 사용가능하도록 할 수 있다.
  * `import` : 위 변수를 사용하고자 한다면 해당 파일의 변수를 통해서 불러올 수 있다.
  * `module` : `export`해주는 파일들을 모듈이라고 한다.

* **import and export**

  * JavaScript 파일 뿐만 아니라 CSS, HTML 파일도 `import`하는 것이 가능하다.

* **import and require**

  * `import` : ES6의 사양으로 새로운 패키지를 읽는다.

  * `require` : 자바스크립트 자체가 지원하는 패키지를 읽는 방법이다.

  * ```javascript
    // require
    var foo = require('foo');
    var bar = require('foo').bar;
    // import
    import foo from 'foo';
    import {bar} from 'foo';
    // module.export
    module.exports = foo;
    exports.bar = bar;
    // export
    export default foo;
    export {bar};
    ```

***

### **Template**

Meteor는 빌드 시 프로젝트 폴더 안의 HTML 파일들을 컴파일한다. 이때 `<template name="addressList">`와 같은 태그를 발견하면 태그 블록 안의 HTML을 읽어 들여 자바스크립트 오브젝트로 변환, 생성한다. 
이 오브젝트가 브라우저에서 동작하는 블레이즈 오브젝트다. 블레이즈 오브젝트 하위 요소인 Template 오브젝트로 HTML을 제어한다. 

`<template name="name">`의 태그는 `{{> name}}`을 통해 html에 삽입될 수 있고 `Template.name`을 통해 JavaScript에서 하위 메소드 등을 구현할 수 있다. 이 방법을 통해 우리가 작성한 HTML 오브젝트를 제어할 수 있다. 

또한 HTML의 `body`섹션은 `Template.body`를 통해 자바스크립트에서 접근할 수 있다.

HTML 파일에서 `{{#each}}`, `{{#if}}` 등의 스페이스바 구문을 통해 논리적 연산 및 자바스크립트로부터 전달받은 변수를 사용할 수 있다.

***

### Collection

Collection은 Meteor에서 데이터를 저장하는 방법이며 서버와 클라이언트로부터의 접근이 모두 가능하다.
Collection에 담겨 있는 아이템을 `Document`라고 한다.

* **Server-side collections**

  * ```javascript
    Todos = new Mongo.Collection('todos');
    ```

    MongoDB 내에서 collection을 만들고 서버에서 사용할 collection에 대한 인터페이스를 생성한다.

  * ```javascript
    // This line won't complete until the insert is done
    Todos.insert({_id:'my-todo'});
    // So this line will return something
    const todo = Todos.findOne({_id:'my-todo'});
    // Look ma, no callbacks!
    console.log(todo);
    ```

  * 

* **Client-side collections**

  * ```javascript
    Todos = new Mongo.Collection('todos');
    ```

    클라이언트에서는 MongoDB에 직접 연결되어 있지 않기 때문에 실제로는 동기 API가 불가능하다.
    대신, 클라이언트에서의 collection은 데이터베이스의 클라이언트 측 캐시이다.

  * ```javascript
    // This line is changing an in-memory Minimongo data structure
    Todos.insert({_id:'my-todo'});
    // And this line is querying it
    const todo = Todos.findOne({_id:'my-todo'});
    // So this happens right away!
    console.log(todo);
    ```

***


