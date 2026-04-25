<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useToast } from 'primevue/usetoast';
import { useForm } from 'vee-validate';

import { addUser } from '../api/addUser';
import { addUserSchema } from '../model/schema';

const { defineField, handleSubmit, errors, isSubmitting, resetForm, meta, values } = useForm({
  validationSchema: toTypedSchema(addUserSchema),
  initialValues: {
    name: '',
    age: undefined,
  },
});

const toast = useToast();

const [name, nameAttrs] = defineField('name');
const [age, ageAttrs] = defineField('age');

const onSubmit = handleSubmit(async (values) => {
  try {
    await addUser(values);

    toast.add({
      severity: 'success',
      summary: 'Готово',
      detail: 'Пользователь добавлен',
      life: 3000,
    });

    resetForm();
  } catch {
    toast.add({
      severity: 'error',
      summary: 'Ошибка',
      detail: 'Не удалось добавить пользователя',
      life: 3000,
    });
  }
});
</script>

<template>
  <form class="flex max-w-md flex-col gap-4" @submit.prevent="onSubmit">
    <label class="flex flex-col gap-1">
      <span>Имя</span>
      <input v-model="name" v-bind="nameAttrs" class="rounded border px-3 py-2" type="text" />
      <span v-if="errors.name" class="text-sm text-red-500">
        {{ errors.name }}
      </span>
    </label>

    <label class="flex flex-col gap-1">
      <span>Возраст</span>
      <input v-model="age" v-bind="ageAttrs" class="rounded border px-3 py-2" type="number" />
      <span v-if="errors.age" class="text-sm text-red-500">
        {{ errors.age }}
      </span>
    </label>

    <button
      class="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      type="submit"
      :disabled="isSubmitting || !meta.valid || !meta.dirty"
    >
      {{ isSubmitting ? 'Отправка...' : 'Добавить пользователя' }}
    </button>
  </form>
</template>
