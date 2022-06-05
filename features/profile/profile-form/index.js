import { Form, Formik } from 'formik';

import ProfileFormSection from './profile-form-section';
import { profileFormSchema } from '../../../constants/profile-form-schema';
import profileFormTemplate from '../../../constants/profile-form-template';
import user from '../../../mocks/user';

const ProfileForm = () => {
    const onSubmit = values => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={user}
            onSubmit={onSubmit}
            validationSchema={profileFormSchema}
        >
            {({ values }) => (
                <Form className="flex w-full flex-row flex-wrap items-start gap-x-40 gap-y-12">
                    {profileFormTemplate.map(section => (
                        <ProfileFormSection
                            defaultValues={values}
                            key={section.label}
                            {...section}
                        />
                    ))}
                    <button
                        className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        type="submit"
                    >
                        Save changes
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ProfileForm;