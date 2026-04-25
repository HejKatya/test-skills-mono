<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import type { User } from 'src/entities/user/model/types';

interface Props {
  users: User[];
  loading?: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'delete', row: User): void;
}>();

const selectedRow = ref<User | null>(null);

const openModal = (row: User) => {
  selectedRow.value = row;
  isModalOpen.value = true;
};

const isModalOpen = ref(false);
const toast = useToast();

const confirmDelete = () => {
  if (!selectedRow.value) return;

  emit('delete', selectedRow.value);

  toast.add({
    severity: 'success',
    summary: 'Удалено',
    detail: `Строка №${selectedRow.value.id} удалена`,
    life: 2000,
  });

  isModalOpen.value = false;
  selectedRow.value = null;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedRow.value = null;
};
</script>

<template>
  <vxe-table :data="users" :loading="loading" border height="100%" auto-resize>
    <vxe-column title="Действия" width="120" align="center">
      <template #default="{ row }">
        <button
          class="cursor-pointer rounded-md border border-[#ff4d4f] bg-transparent px-2.5 py-1 text-xs text-[#ff4d4f] hover:bg-[#ff4d4f] hover:text-white"
          @click="openModal(row)"
        >
          Удалить
        </button>
      </template>
    </vxe-column>

    <vxe-column field="name" title="Имя" />

    <vxe-column field="age" title="Возраст" />
  </vxe-table>
  <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black/40">
    <div class="min-w-[280px] rounded-lg bg-white p-4">
      <p>Удалить строку №{{ selectedRow?.id }}?</p>

      <div class="mt-4 flex justify-end gap-2">
        <button @click="confirmDelete">Да</button>
        <button @click="closeModal">Нет</button>
      </div>
    </div>
  </div>
</template>
