/**
 * Created by Min on 2017/7/10.
 */
import { connect, Dispatch } from 'react-redux';
import { EnthusiasmAction, incrementEnthusiasm, decrementEnthusiasm } from '../actions';
import { StoreState } from '../types';
import Demo from '../components/Demo';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(incrementEnthusiasm()),
        onDecrement: () => dispatch(decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
