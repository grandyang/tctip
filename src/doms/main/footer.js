import BaseDom from '../base-dom'
import { textKey } from '../../utils/dom'

class Footer extends BaseDom {
  constructor (config, parentDom) {
    super(config, parentDom)
    this._link = undefined
    this.genDom()
  }

  genDom () {
    this.createDom({
      className: 'tctip-footer'
    }, 'p')

    this._link = new Link({}, this)
  }
}

class Link extends BaseDom {
  constructor (config, parentDom) {
    super(config, parentDom)
    this.genDom()
  }

  genDom () {
    this.createDom({
      href: 'http://www.cnblogs.com/grandyang/p/7618471.html',
      target: '_blank',
      [textKey]: '查看赏金列表'
    }, 'a')
  }
}

export default Footer
