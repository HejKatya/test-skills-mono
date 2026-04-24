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

const isModalOpen = ref(false);
const selectedRow = ref<any>(null);
const toast = useToast();
const openModal = (row: any) => {
  selectedRow.value = row;
  isModalOpen.value = true;
};
const confirmDelete = () => {
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
        <button class="delete-btn" @click="openModal(row)">Удалить</button>
      </template>
    </vxe-column>

    <vxe-column field="name" title="Имя" />

    <vxe-column field="age" title="Возраст" />
  </vxe-table>
  <div v-if="isModalOpen" class="modal-backdrop">
    <div class="modal">
      <p>Удалить строку №{{ selectedRow?.id }}?</p>

      <div class="actions">
        <button @click="confirmDelete">Да</button>
        <button @click="closeModal">Нет</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delete-btn {
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #ff4d4f;
  background: transparent;
  color: #ff4d4f;
  cursor: pointer;
  font-size: 12px;
}

.delete-btn:hover {
  background: #ff4d4f;
  color: white;
}
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  padding: 16px;
  border-radius: 8px;
  min-width: 280px;
}

.actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>
