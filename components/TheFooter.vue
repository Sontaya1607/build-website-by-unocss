<script setup lang="ts">
</script>

<template>
  <footer>
    <div
      class="bg-c-1/10"
      flex="~ items-center justify-center"
      h="[564px] lg:[420px]"
    >
      <div
        class="my-section"
        grid="~ cols-1 gap-8 lg:cols-4 lg:gap-4"
      >
        <div text="center lg:left">
          <TheLogo class="justify-center lg:justify-start" m="b-6 lg:b-7" />

          <div
            m="b-7 lg:b-14 x-auto lg:x-0"
            max="w-[224px] lg:w-[220px]"
            text="tc-3 lg:tc-2"
            font="medium"
          >
            2728 Hickory StreetSalt
            Lake City, UT 84104
          </div>

          <div
            flex="~ items-center justify-center lg:justify-start gap-2"
            text="tc-3 lg:tc-2"
            m="b-3"
            font="medium"
          >
            <IconPhone class="h-4 w-auto lg:h-5" text="tc-3 lg:tc-2" />
            +1 206-214-2298
          </div>

          <div
            flex="~ items-center justify-center lg:justify-start gap-2"
            text="tc-3 lg:tc-2"
            font="medium"
          >
            <IconMail class="h-3 w-auto lg:h-4" text="tc-3 lg:tc-2" />
            support@rezilla.com
          </div>
        </div>

        <div class="hidden lg:block">
          <h6 class="mb-10 mt-[11px] text-xl text-tc-1 font-semibold">
            Quick Links
          </h6>
          <div class="flex flex-col gap-y-1 text-base">
            <a href="#" class="link">Home</a>
            <a href="#" class="link">About</a>
            <a href="#" class="link">Listings</a>
            <a href="#" class="link">Services</a>
            <a href="#" class="link">Blogs</a>
            <a href="#" class="link">Become  a Agent</a>
          </div>
        </div>

        <div class="hidden lg:block">
          <h6 class="mb-10 mt-[11px] text-xl text-tc-1 font-semibold">
            Discovery
          </h6>
          <div class="flex flex-col gap-y-1 text-base">
            <a href="#" class="link">Canada</a>
            <a href="#" class="link">United States</a>
            <a href="#" class="link">Germany</a>
            <a href="#" class="link">Africa</a>
            <a href="#" class="link">India</a>
          </div>
        </div>

        <div text="center lg:left">
          <h6
            class="max-w-[164px] font-semibold"
            text="base lg:xl tc-1"
            m="b-4 x-auto lg:x-0"
          >
            Subscribe to our Newsletter!
          </h6>

          <div class="mb-10 flex items-center rounded-full bg-white p-1 pl-6 shadow lg:mb-8">
            <input
              id="email" type="email" name="email"
              class="h-11 w-full shrink-1 !outline-none"
              placeholder="Email Address"
            >
            <button type="button" class="h-[50px] w-[50px] flex shrink-0 items-center justify-center rounded-full bg-primary">
              <IconArrowRight class="h-4 w-auto text-white" />
            </button>
          </div>

          <div class="mb-8 font-semibold lg:mb-[30px]" text="base lg:xl tc-1">
            Follow Us on
          </div>

          <div class="flex items-center justify-center gap-10 lg:justify-start lg:gap-4">
            <IconLinkedin class="h-[22px] w-auto text-primary" />
            <IconFacebook class="h-[22px] w-auto text-primary" />
            <IconInstagram class="h-[22px] w-auto text-primary" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="bg-tc-1 text-tc-4"
      text="sm lg:base"
    >
      <div
        class="my-section"
        flex="~ items-center justify-center lg:justify-between"
        h="[40px] lg:[50px]"
      >
        <span>© Rezilla – All rights reserved</span>

        <div class="hidden lg:block space-x-10">
          <a href="#/terms">Terms and Conditions</a>
          <a href="#/privacy">Privacy Policy</a>
          <a href="#/disclaimer">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
</template>
