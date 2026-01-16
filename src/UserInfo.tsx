interface UserInfoProps {
    user: {
        id: number;
        name: string;
        age: number;
    }
};

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <h2>안녕하세요, {user.name}님! 10년 뒤 당신은 {user.age + 10}살입니다.</h2>
    )
}

export default UserInfo