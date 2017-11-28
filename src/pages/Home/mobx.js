/**
 * Created by Min on 2017/11/28.
 */
import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';

class Home {
    @observable collapsed = false;
    
    @autobind
    @action('toggle sider')
    toggle() {
        this.collapsed = !this.collapsed;
    }
}

export const store = new Home();
