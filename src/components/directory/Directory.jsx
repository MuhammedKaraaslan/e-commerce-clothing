import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.styles.scss'

import MenuItem from '../menu-item/MenuItem';

import { selectDirectorySections } from '../../store/directory/directorySelectors';

function Directory({ sections }) {
    return (
        <div className='directory-menu'>
            {
                sections.map(section => (
                    <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
