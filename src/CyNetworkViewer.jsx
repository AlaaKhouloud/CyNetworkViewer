import React, {Component} from 'react'
import CytoscapeJsRenderer from './CytoscapeJsRenderer'


const REDERER_CY = 'cytoscape'


class CyNetworkViewer extends Component {

  render() {

    const props = this.props;

    if(this.props.renderer === REDERER_CY) {
      return (
        <CytoscapeJsRenderer {...props} />
      )
    } else {
      return (
        <div>
          <h1>Null renderer</h1>
          <p>
            {props.id}
          </p>
        </div>
      )
    }
  }
}

CyNetworkViewer.propTypes = {
  id: React.PropTypes.string,
  network: React.PropTypes.object,
  renderer: React.PropTypes.string
};


CyNetworkViewer.defaultProps = {
  renderer: REDERER_CY
};

export default CyNetworkViewer