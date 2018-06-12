// export class User {
//     id = 0;
//     name = '';
//     email = '';
//     password = '';
// }

// export const user: User[] = [
//     {
//         id: 1,
//         firstName: 'Admin',
//         lastName: 'admin',
//         email: 'admin@gmail.com',
//     }
// ];

export class User {
    name: string;
    username: string;
    email: string;
    password: string;

    constructor(values: Object = {}) {
        // Constructor initialization
        Object.assign(this, values);
}
}
