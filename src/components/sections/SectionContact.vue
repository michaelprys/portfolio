<script setup>
</script>

<template>
    <section id="contact" class="container mx-auto pt-12">
        <h2 class="text-center text-4xl">
            Contact
        </h2>
        <form class="mx-auto mt-16 grid max-w-[38.75rem] grid-cols-2 gap-4" action="">
            <div>
                <label class="sr-only" for="name">Your name</label>
                <input id="name" class="w-full rounded-common border-2 border-transparent bg-primary-common p-5 px-5 py-4 placeholder-muted-text outline-transparent transition-all duration-300 focus:border-border-primary focus:outline" type="text" name="name" placeholder="Your Name" required>
            </div>
            <div>
                <label class="sr-only" for="email">Your email</label>
                <input id="email" class="w-full rounded-common border-2 border-transparent bg-primary-common p-5 px-5 py-4 placeholder-muted-text outline-transparent transition-all duration-300 focus:border-border-primary focus:outline" type="email" name="email" placeholder="Email *" required>
            </div>
            <div class="col-span-2">
                <label class="sr-only" for="msg">Enter your message</label>
                <textarea id="msg" class="min-h-[15rem] w-full resize-none rounded-3xl border-2 border-transparent bg-primary-common p-5 text-primary-text outline-transparent transition-all duration-300 placeholder-muted-text focus:border-border-primary focus:outline" name="message" placeholder="Enter Your Message" required />
            </div>
            <div class="col-span-2 mx-auto pb-16">
                <button class="mt-6 w-full rounded-max bg-primary-accent px-14 py-4 text-center text-primary-text transition-colors duration-400 hover:bg-primary-accent/90">
                    Send Message
                </button>
            </div>
        </form>
    </section>
</template>
