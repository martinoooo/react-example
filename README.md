# 生命周期
旧的生命周期十分完整，基本可以捕捉到组件更新的每一个state/props/ref，没有什从逻辑上的毛病。
但是架不住官方自己搞事情，react打算在17版本推出新的Async Rendering，提出一种可被打断的生命周期，而可以被打断的阶段正是实际dom挂载之前的虚拟dom构建阶段，也就是要被去掉的三个生命周期。
生命周期一旦被打断，下次恢复的时候又会再跑一次之前的生命周期，因此componentWillMount，componentWillReceiveProps， componentWillUpdate都不能保证只在挂载/拿到props/状态变化的时候刷新一次了，所以这三个方法被标记为不安全。

 1. componentWillMount--使用componentDidMount代替
 2. componentWillUpdate--使用componentDidUpdate代替
 3. componentWillReceiveProps--使用一个新的方法：static
        getDerivedStateFromProps来代替。
