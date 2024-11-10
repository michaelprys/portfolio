<script setup>
</script>

<template>
    <section class='container mx-auto' id='contact'>
        <h2 class="text-center text-4xl">Contact</h2>
        <form class='mx-auto mt-16 grid max-w-[38.75rem] grid-cols-2 gap-4' action="">
            <div>
                <label for='name'></label>
                <input class='w-full rounded-4xl border-2 border-transparent bg-custom-gray-1 p-5 px-5 py-4 placeholder-custom-subtext outline-transparent transition-all duration-300 focus:border-custom-focus focus:outline' type='text' id='name' name='name' placeholder='Your Name' required>
            </div>
            <div>
                <label for='name'></label>
                <input class='w-full rounded-4xl border-2 border-transparent bg-custom-gray-1 p-5 px-5 py-4 placeholder-custom-subtext outline-transparent transition-all duration-300 focus:border-custom-focus focus:outline' type='email' id='name' name='email' placeholder='Email *' required>
            </div>
            <div class='col-span-2'>
                <label for='msg'></label>
                <textarea class='min-h-[15rem] w-full resize-none rounded-3xl border-2 border-transparent bg-custom-gray-1 p-5 text-custom-white outline-transparent transition-all duration-300 focus:border-custom-focus focus:outline' id='msg' name='message' placeholder='Enter Your Message' required />
            </div>
            <div class='col-span-2 mx-auto pb-16'>
                <button class='mt-6 w-full rounded-btn bg-custom-citrus px-14 py-4 text-center text-custom-white transition-colors duration-400 hover:bg-opacity-90'>Send Message</button>
            </div>
        </form>
    </section>
</template>
