import React from 'react';
import { style } from "typestyle";
import { changeNowListAction } from "../../models/main/changeNowList";
class Header extends React.Component {
    changeList(id) {
        this.props.dispatch(changeNowListAction(id));
    }
    renderList() {
        const listStyle = style({
            float: 'right'
        });
        const tagStyle = style({
            height: '25px',
            width: '70px',
            background: 'linear-gradient(to bottom,#909090,grey)',
            borderRadius: '7px 7px 0 0',
            borderWidth: '1px',
            color: 'white',
            fontSize: '13px',
            float: 'left',
            textHeight: '30px',
            borderColor: 'grey'
        });
        return (<div className={listStyle}>
        {this.props.list.map((item) => {
            return (<div className={tagStyle} onClick={this.changeList.bind(this, item.id)} key={item.key}>{item.name}</div>);
        })}
      </div>);
    }
    render() {
        const commoStyle = style({
            color: 'white',
            width: '250px',
            fontSize: '40px',
            height: '65px',
            paddingTop: '30px'
        });
        const spliteStyle = style({
            height: '1px',
            width: '100%',
            background: 'grey',
            marginTop: '25px'
        });
        const headStyle = style({
            background: 'linear-gradient(to bottom,black,#c8c8c8)',
        });
        return (<div>
        <div className={headStyle}>
          <div className={commoStyle}>商户名称</div>
          {this.renderList()}
          <div className={spliteStyle}></div>
        </div>
      </div>);
    }
}
export default Header;
//# sourceMappingURL=header.jsx.map