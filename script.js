// �N���b�N�v�f���擾
const target = document.getElementById('sasaki');

// �N���b�N�C�x���g���X�i�[��ǉ�
target.addEventListener('click', function () {
    // clicked�N���X��؂�ւ��ďk���A�j���[�V�������J�n
    target.classList.toggle('clicked');

    // ��莞�Ԃ��o�߂�����clicked�N���X���폜���Č��ɖ߂�
    setTimeout(function () {
        target.classList.remove('clicked');
    }, 1000); // 1000�~���b�i1�b�j��Ɍ��ɖ߂�
});
