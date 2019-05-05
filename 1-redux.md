# redux

javascript 状态管理器

# 使用步骤

1. 安装 yarn add redux
2. src 目录下面创建 一个 store 文件夹，文件夹下面在放一个 index.js
3. store 文件夹下，还要创建我们的 reducers 文件夹，下面也放一个 index.js
4. store 文件夹下，再创建一个 actions 文件夹，里面放一个 index.js

- src
  - store
    - actions       放置很多 create acions 函数的文件
      - index.js
    - reducers      放置很多的 reducer 函数的文件
      - index.js
    - index.js      仓库的主js文件

# 概念

1. action   动作，他是一个一定要包含有一个 type 属性的 对象
    {
      type: 'addTodo',
      ...
    }

2. reducer  处理动作的函数，（纯函数）, 在这个的最后，一定要return一份新的state

  // prevState 上次仓库的状态
  // action 这次的动作
  (prevState, action) => {
    <!-- prevState = [1, 2, 3]; -->

    <!-- return prevState -->
  }

3. store  仓库的实例对象

  getState().     获取当前仓库的数据
  subscribe(cb).  监听仓库的变化，当仓库有变化的时候，cb 就会被执行
  dispatch(obj).  派发动作，obj - 动作。
  。。。

# actionTypes 常量

> 动作类型如果是字符串的话，会带来一些开发时候的不方便。比如字符串写错了。

为了避免单词拼写错误的情况，我们可以将 动作类型设置为常量

# createAction 函数

把一个动作对象，通过 函数的方式去生成。

他是个函数，由他去返回动作对象

# redux 异步

1. reducer 函数里面的操作都是同步的操作
2. action 动作能写么？也不能，默认情况下，我们的动作都是一个 对象。
3. 能操作的就是，你做完异步之后再派发动作。。。。


4. 借助一些中间件能是我们的redux支持异步。

# redux 中间件

  - redux-logger
  - redux-thunk (重要 他能让我们的 dispatch 接收函数)

    默认情况下。store.dispatch() 只能接受对象
    使用这块中间件之后， store.dispath() 除了对象之外还可以接受函数。




# redux 3大原则

1. 唯一的数据源。
2. 数据是不可变的。
3. reducer是一个纯函数，相同的输入一定产生相同的输出，并且不会有副作用。

# redux 常用 api


1. createStore
2. store.getState()
3. store.subscrite()
4. store.dispatch()


# reducer 的拆分

使用 combineReducers 来结合我们拆分出去的 小  reduer


















