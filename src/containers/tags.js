import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { activateTag } from '../actions/activate-tag.js';

class Tags extends React.Component {
    render() {

        return (
            <div className='tag-list btn-group' >
                {this.props.tags.map((tag) => {
                     return (
                         <div key={tag.key}  className='checkbox-inline tag-item'>
                        <label>
                            <input 
                                type="checkbox"
                                onClick={() => this.props.activateTag(this.props.allOrgs, this.props.tags, tag.key)}
                                
                            />  
                            {tag.key}
                        </label>
                        </div>
                     );
                })}
            </div>
    );
    }
}

function mapStateToProps(state) {
    return {
        tags: state.tags,
        allOrgs: state.organizations.all
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({activateTag: activateTag}, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Tags);