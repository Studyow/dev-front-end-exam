|<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
        OLE777 Official
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Send a response</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="modal-body">
                <div class="mb-3">
                <label for="fullname" class="form-label">Full Name</label>
                <input type="text" v-model="form.fullname" class="form-control" id="fullname" name="fullname" placeholder="Full Name">
                </div>

                <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" v-model="form.email" class="form-control" id="email" name="email" placeholder="name@example.com">
                </div>

                <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" v-model="form.subject" class="form-control" id="subject" name="subject" placeholder="subject">
                </div>
                
                <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" v-model="form.message" id="message" name="message" rows="3"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    </div>
    </div>
</template>

<!-- {
    "fullname": "test",
    "email": "test@tes.com",
    "subject": "test",
    "message": "Message successfully sent",
    "code": "200"
} -->


<!-- <script setup>
import { ref } from 'vue'

const form = ref({
    fullname: '',
    email: '',
    subject: '',
    message: '',
})

const submitForm = async () => {
    const { data: responseData } = await $fetch('https://super7tech.com/developer_exam/api/sendMessage', {
        method: 'POST',
        // headers: { 'Content-Type': "multipart/form-data" },
        data: { 
            fullname: form.value.fullname,
            email: form.value.email,
            subject: form.value.subject,
            message: form.value.message, 
        }
    })

    console.log(responseData.value)
}


</script> -->

<!-- formData: {
    fullname: null,
    email: null,
    subject: null,
    message: null,
} -->

<script>
export default {
    name: 'OfficeForm',
    data() {
        return {
            form: {
                fullname: '',
                email: '',
                subject: '',
                message: '',
            }
        }
    },
    methods: {
        formSubmit() {
            this.handleSubmit().then( (result) => {
                console.log(result)
            }).catch( (error) => {
                console.error('Contact form could not be send', error)
            });
        },
        async handleSubmit() {
            return await $fetch('https://super7tech.com/developer_exam/api/sendMessage', { 
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                method: 'POST',
                body: {
                    fullname: this.form.fullname,
                    email: this.form.email,
                    subject: this.form.subject,
                    message: this.form.message,
                }
            } );

            // const { data: response } = await useFetch('https://super7tech.com/developer_exam/api/sendMessage', {
            //     method: 'post',
            //     body: { 
            //         fullname: this.form.fullname,
            //         email: this.form.email,
            //         subject: this.form.subject,
            //         message: this.form.message, 
            //     }
            // })
            // console.log(response.value)

            // if (response) {
            //     alert(response.value);
            // }
        }
    }
}
</script>

