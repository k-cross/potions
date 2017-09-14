import { reducerCall } from './index';

export default function(state = {}, action) {
  return reducerCall(state, action, reducerClass);
}

class reducerClass {
  static modalDeleteShow(new_state, action) {
    new_state.modal = new_state.modal ? new_state.modal : {};
    new_state.modal.list_delete = {
      show: true,
      id: action.id,
      username: action.username,
    }
    return new_state;
  }

  static modalDeleteHide(new_state, action) {
    new_state.modal.list_delete = {
      show: false,
      id: 0,
      username: '',
    }
    return new_state;
  }

  static delete(new_state, action) {
    for (const index in new_state.list) {
      if (new_state.list[index].id === action.id) {
        new_state.list.splice(index, 1);
        break;
      }
    }

    return new_state;
  }
}
