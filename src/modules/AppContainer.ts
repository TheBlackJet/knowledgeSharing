import { connect } from 'react-redux';
import AppView, { IAppViewProps } from './AppComponent'; 

export default connect<{}, undefined, IAppViewProps>(() => ({}), null)(AppView);
