new Vue({
    el: '#app',
    data: {
        services: [
            '24/7 Availability',
            'Clean and Comfortable Cars',
            'Professional Drivers',
            'Affordable Prices'
        ],
        form: {
            name: '',
            email: '',
            message: ''
        },
        mpesaNumber: ''
    },
    methods: {
        bookRide() {
            alert('Ride booked successfully!');
        },
        submitForm() {
            alert(`Message sent! Name: ${this.form.name}, Email: ${this.form.email}`);
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        },
        payWithStripe() {
            alert('Redirecting to Stripe...');
            window.location.href = "https://www.stripe.com/";
        },
        payWithMpesa() {
            if(this.mpesaNumber) {
                alert(`Payment initiated with M-Pesa number: ${this.mpesaNumber}`);
                this.mpesaNumber = '';
            } else {
                alert('Please enter your M-Pesa number.');
            }
        }
    }
});
new Vue({
    el: '#app',
    data: {
        form: {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
        submitForm() {
            alert(`Complaint submitted! Name: ${this.form.name}, Email: ${this.form.email}`);
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
        }
    }
});
