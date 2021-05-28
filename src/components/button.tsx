import { defineComponent, renderSlot } from 'vue';
import { ElButton } from 'element-plus';

const Button = defineComponent({
  props: {
    type: {
      type: String,
      require: true
    }
  },
  setup(props, { slots }) {
    return () => (
      <ElButton>
        {renderSlot(slots, 'default')}
      </ElButton>
    );
  }
});

export default Button;
