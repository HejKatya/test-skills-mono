import { V1BaseUsersService } from 'src/shared/api/client/sdk.gen';
import type { AddUserData } from 'src/shared/api/client/types.gen';

import type { AddUserDto } from '../model/schema';

export function addUser(data: AddUserDto) {
  return V1BaseUsersService.addUser({
    body: data as AddUserData['body'],
  });
}
