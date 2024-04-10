import { Button, Result } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../store/index';
import { RootState } from '../../store';

const home = () => {
  const global = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const onSetUserToken = () => {
    dispatch({
      type: 'global/setUserToken',
      payload: Number(global.userToken) + 2,
    });
  };
  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key={'fda'} onClick={() => onSetUserToken()}>
            dispatch setUserToken
          </Button>,
        ]}
      />
      <div>{global.userToken}</div>
      <div>{store.getState().global.userToken}</div>
    </div>
  );
};

export default home;
