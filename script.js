// �y�[�W���̂��ׂĂ̗v�f���擾
const elements = document.querySelectorAll('*');

// �L���ȃN���X�ƃN�G�����i�[����z��
const validStyles = [];

// �e�v�f�ɂ��ăN���X�ƃN�G�����m�F
elements.forEach((element) => {
    const computedStyle = getComputedStyle(element);
    const classes = element.classList;

    // �N���X�̊m�F
    classes.forEach((className) => {
        if (computedStyle.getPropertyValue('color') === 'rgb(255, 0, 0)' &&
            computedStyle.getPropertyValue('font-size') === '24px') {
            validStyles.push(`�N���X "${className}" ���K�p����Ă��܂��B`);
        }
    });

    // �N�G���̊m�F
    if (computedStyle.getPropertyValue('border-top-color') === 'rgb(0, 0, 255)') {
        validStyles.push('���f�B�A�N�G�����̃X�^�C�����K�p����Ă��܂��B');
    }
});

// ���ʂ�\��
const resultElement = document.getElementById('result');
if (validStyles.length > 0) {
    resultElement.textContent = '�ȉ��̃X�^�C�����L���ɂȂ��Ă��܂��F\n\n' + validStyles.join('\n');
} else {
    resultElement.textContent = '�L���ȃX�^�C���͌�����܂���ł����B';
}
