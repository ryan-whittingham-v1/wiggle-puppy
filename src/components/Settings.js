import React from 'react';
import { Modal, Header, Icon, Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function Settings(props) {
  return (
    <Modal
      onClose={props.handleClick}
      onOpen={props.handleClick}
      open={props.open}
      size="small"
      trigger={<Button>Settings</Button>}
    >
      <Header>Settings</Header>
      <Modal.Content>
        <Checkbox toggle label="Multiplication" />
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" inverted onClick={props.handleClick}>
          <Icon name="checkmark" /> Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

Settings.propTypes = {
  open: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Settings;
