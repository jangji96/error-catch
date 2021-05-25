import React from 'react';

function User({ user }) {
    // if (!user) {
    //     return null;
    // } // 널 체킹
    return (
        <div>
            <div>
                <b>ID</b>: {user.id}
            </div>
            <div>
                <b>Username:</b> {user.username}
            </div>
        </div>
    );
}

export default User;