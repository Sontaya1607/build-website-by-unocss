<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <div class="hidden bg-primary text-sm text-white lg:block">
      <div class="h-10 flex items-center justify-between my-section">
        <div>Rezilla, 18 Grattan St, Brooklyn</div>

        <div class="flex gap-7">
          <div class="flex items-center gap-2">
            <IconPhone class="h-4 w-auto text-white" />
            +1 206-214-2298
          </div>
          <div class="flex items-center gap-2">
            <IconMail class="h-3 w-auto text-white" />
            support@rezilla.com
          </div>
        </div>
      </div>
    </div>

    <!-- <nav class="mx-auto h-20 flex items-center justify-start justify-between container">
      <div class="w-1/3 flex items-center">
        <a href="#home" class="rounded-full bg-[#4361EE]/30 px-4 py-2 font-semibold">Home</a>
        <a href="#about" class="px-4 py-2">About</a>
        <a href="#listing" class="px-4 py-2">Listing</a>
        <a href="#services" class="px-4 py-2">Services</a>
        <a href="#blogs" class="px-4 py-2">Blogs</a>
      </div>

      <TheLogo />

      <div class="w-1/3 flex items-center justify-end gap-2">
        <div>Login/Register</div>

        <button type="button" class="rounded-full bg-[#3A0CA3] px-4 py-2 text-base text-white">
          Add Listing
        </button>
      </div>
    </nav> -->

    <!-- <div class="mb-[70px] mt-[80px]">
      <div class="flex justify-between gap-4 my-section">
        <div class="w-1/2">
          <div>
            <div class="mb-6 text-xl text-primary tracking-[2.91px] uppercase">
              REAL ESTATE
            </div>
            <h1 class="mb-6 w-[580px] text-6xl text-tc-1 font-semibold">
              Find a perfect home you love..!
            </h1>
          </div>
          <div class="text-tc-3">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.
          </div>

          <div class="h-[350px] flex items-center justify-center border rounded text-tc-2">
            Slider...
          </div>
        </div>

        <div class="w-1/2">
          <form class="rounded-[30px] bg-white p-6 shadow">
            <input
              type="text" placeholder="New York, San Francisco, etc"
              class="mb-8 h-[59px] w-full rounded-[20px] bg-tc-5/20 px-5 !outline-none placeholder-tc-4"
            >
            <select class="mb-8 h-[59px] w-full rounded-[20px] bg-tc-5/20 text-tc-4 !outline-none">
              <option value="" selected>
                Select Property Type
              </option>
            </select>
            <select class="mb-3 h-[59px] w-full rounded-[20px] bg-tc-5/20 text-tc-4 !outline-none">
              <option value="" selected>
                Select Rooms
              </option>
            </select>
            <div>
              <a href="#" class="mt-3 text-sm text-primary link">Advance Search</a>
            </div>

            <button type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div> -->

    <SectionOurService />
    <TheFooter />
  </div>
</template>
