<script setup lang="ts">
import IconCopyright from '@/components/icons/IconCopyright.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
</script>

<template>
    <footer class='container mx-auto py-12'>
        <div class='flex items-center justify-between'>
            <div class='flex items-center gap-[4.5rem]'>
                <a class='font-secondary text-[2.5rem]' href="#home" aria-label='Prysiazhnyi logo, go to the home section'>Prysiazhnyi</a>
                <ul class='flex items-center gap-12'>
                    <li class='text-custom-white transition-all duration-400 hover:text-opacity-60'><a href="#home" aria-label='Go to the home section'>Home</a></li>
                    <li class='text-custom-white transition-all duration-400 hover:text-opacity-60'><a href="#projects" aria-label='Go to the projects section'>Projects</a></li>
                    <li class='text-custom-white transition-all duration-400 hover:text-opacity-60'><a href="#services" aria-label='Go to the services section'>Services</a></li>
                </ul>
            </div>
            <div>
                <ul class='flex items-center gap-6'>
                    <li class='transition-transform hover:scale-125'>
                        <a href="/" target='_blank' aria-label="Facebook profile">
                            <IconFacebook class="h-10 w-10 rounded-full bg-custom-decoration object-cover p-2"
                            />
                        </a>
                    </li>
                    <li class='transition-transform hover:scale-125'>
                        <a href="/" target='_blank' aria-label="Instagram profile">
                            <IconInstagram class="h-10 w-10 rounded-full bg-custom-decoration object-cover p-2"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class='text-center'>
            <span class='mx-auto mt-28 inline-flex items-center justify-center gap-2 text-custom-white opacity-60 transition-all duration-400 hover:opacity-100'><IconCopyright />All Rights Reserved</span>
        </div>
    </footer>
</template>