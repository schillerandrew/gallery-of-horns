import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal className="img-responsive"
          show={this.props.showModal}
          onHide={this.props.hideBeastHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.description}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.url}
              alt={this.props.description}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  };
}

export default SelectedBeast;