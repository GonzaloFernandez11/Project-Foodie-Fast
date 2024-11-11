import LoadingButton from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, 'Name is required'),
    addressLine1: z.string().min(1, 'Address Line 1 is required'),
    country: z.string().min(1, 'Country is required'),
    city: z.string().min(1, 'City is required'),
});

type userFormData = z.infer <typeof formSchema>;


type Props = {
    onSave: (userProfileData: userFormData) => void;
    isLoading: boolean;
}

const UserProfileForm = ( {onSave, isLoading}: Props ) => {
    const form = useForm<userFormData>({
        resolver: zodResolver(formSchema),
    });

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSave)} className='space-y-4 bg-gray-50 rounded-lg md:p-10'> {/* Buscar otros colores y probarlos*/}
                <div>
                    <h2 className='tex-2xl font-bold'>User Profile Form</h2>
                    <FormDescription>
                        View and change your profile information here
                    </FormDescription>
                </div>
                <FormField control={form.control} name='email' render={ ({field}) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white'/>
                        </FormControl>
                    </FormItem>
                )}
                />

                <FormField control={form.control} name='name' render={ ({field}) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white'/>
                        </FormControl>
                    </FormItem>
                )}
                />

                <div className='flex flex-col md:flex-row gap-4'>
                <FormField control={form.control} name='addressLine1' render={ ({field}) => (
                    <FormItem>
                        <FormLabel>Address Line 1</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white'/>
                        </FormControl>
                    </FormItem>
                )}
                />

                <FormField control={form.control} name='country' render={ ({field}) => (
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white'/>
                        </FormControl>
                    </FormItem>
                )}
                />

                <FormField control={form.control} name='city' render={ ({field}) => (
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className='bg-white'/>
                        </FormControl>
                    </FormItem>
                )}
                />
                </div>
                {isLoading ? ( 
                   <LoadingButton /> 
                ) : ( 
                   <Button type='submit' className='bg-pink-600' >Submit</Button> 
                )}
            </form>
        </Form>
    )
}

export default UserProfileForm;