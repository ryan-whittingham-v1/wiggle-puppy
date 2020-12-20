import React from 'react'
import { Button, Checkbox, Modal } from 'semantic-ui-react'

import styles from '../styles/settings.module.css'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function Settings(props) {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  return (
    <div>
      <Button
        onClick={() => dispatch({ type: 'OPEN_MODAL', dimmer: 'blurring' })}
        floated="right"
      >
        Settings
      </Button>

      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
      >
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content>
          <h1>Operations</h1>
          <div className={styles.options}>
          <Checkbox label='Multiplication' defaultChecked={props.settings['multiplication']} onClick={() => props.onClick("multiplication")} toggle={true}/>
          <Checkbox label='Division' defaultChecked={props.settings['division']} onClick={() => props.onClick("division")} toggle={true}/>
          <Checkbox label='Addition' defaultChecked={props.settings['addition']} onClick={() => props.onClick("addition")} toggle={true}/>
          <Checkbox label='Subtraction' defaultChecked={props.settings['subtraction']} onClick={() => props.onClick("subtraction")} toggle={true}/>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default Settings