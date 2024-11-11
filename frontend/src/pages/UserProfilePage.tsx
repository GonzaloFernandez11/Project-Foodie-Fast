import UserProfileForm from "@/forms/user-profile-form/UserProfileForm"

const UserProfilePage = () => {
    return (
        <UserProfileForm onSave={function (userProfileData: { name: string; addressLine1: string; country: string; city: string; email?: string | undefined }): void {
            throw new Error("Function not implemented.")
        } } isLoading={false} />
    )
}


export default UserProfilePage