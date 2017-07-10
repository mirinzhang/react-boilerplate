/**
 * Created by Min on 2017/7/10.
 */
import { connect, Dispatch } from 'react-redux';
import * as actions from '../actions';
import { StoreState } from '../types';
import Demo from '../components/Demo';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
