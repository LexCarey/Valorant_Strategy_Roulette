import React, { useEffect, useState } from 'react'
import './Agent_Select.css'
import Agent_Choice from '../Agent_Choice/Agent_Choice'


const Agent_Select = (props) => {
    const {agents} = props

    return (
        <div className='agentIcons'>
            <Agent_Choice agents = {agents}></Agent_Choice>
            <Agent_Choice agents = {agents}></Agent_Choice>
            <Agent_Choice agents = {agents}></Agent_Choice>
            <Agent_Choice agents = {agents}></Agent_Choice>
            <Agent_Choice agents = {agents}></Agent_Choice>
        </div>
    )
}

export default Agent_Select